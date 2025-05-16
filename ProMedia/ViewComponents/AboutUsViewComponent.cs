using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProMedia.Data;

namespace ProMedia.ViewComponents
{
    public class AboutUsViewComponent :ViewComponent
    {
       
        public async Task<IViewComponentResult> InvokeAsync()
        {
           

            return await Task.FromResult(View());
        }
    }
}
