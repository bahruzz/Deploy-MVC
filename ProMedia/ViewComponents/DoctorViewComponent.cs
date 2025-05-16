using Microsoft.AspNetCore.Mvc;

namespace ProMedia.ViewComponents
{
    public class DoctorViewComponent :ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
           
            return await Task.FromResult(View());
        }
    }
}
