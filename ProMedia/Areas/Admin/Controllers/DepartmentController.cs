using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProMedia.Areas.Admin.ViewModels.Department;
using ProMedia.Data;
using ProMedia.Helpers.Extensions;
using ProMedia.Models;
using System.Reflection.Metadata;

namespace ProMedia.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class DepartmentController : Controller
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _env;
        public DepartmentController(AppDbContext context,
                                    IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
            
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var res =await _context.Departments.ToListAsync();
            return View(res.Select(m => new DepartmentVM { Id = m.Id, Name = m.Name, Description = m.Description, Image = m.Image, CreatedDate = m.CreatedDate.ToString("MM.dd.yyyy") }));
        }
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(DepartmentCreateVM request)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            bool existDepartment =  await _context.Departments.AnyAsync(m => m.Name.Trim() == request.Name.Trim());
            if (existDepartment)
            {
                ModelState.AddModelError("Name", "This name already exist");
                return View();
            }
            if (!request.Image.CheckFileType("image/"))
            {
                ModelState.AddModelError("Image", "Input accept only image format");
                return View();
            }
            if (!request.Image.CheckFileSize(200))
            {
                ModelState.AddModelError("Image", "Image size must be 200 kb");
                return View();
            }

            string fileName = Guid.NewGuid().ToString() + "-" + request.Image.FileName;
            string path = _env.GenerateFilePath("assets/images", fileName);

            await request.Image.SaveFileToLocalAsync(path);
            await _context.AddAsync(new Department { Name = request.Name, Description = request.Description, Image = fileName });
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
