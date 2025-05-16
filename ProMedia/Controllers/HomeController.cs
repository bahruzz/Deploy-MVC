using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ProMedia.Controllers
{
    public class HomeController : Controller
    {
       

        public IActionResult Index()
        {
            return View();
        }

       
    }
}
