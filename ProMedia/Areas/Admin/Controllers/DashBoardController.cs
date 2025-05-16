using Microsoft.AspNetCore.Mvc;

namespace ProMedia.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class DashBoardController : Controller
    {
      
        public IActionResult Index()
        {
            return View();
        }
    }
}
