using System.ComponentModel.DataAnnotations;

namespace ProMedia.Areas.Admin.ViewModels.Department
{
    public class DepartmentCreateVM
    {
        public string? Description { get; set; }
        [Required(ErrorMessage = "This input can't be empty")]
        [StringLength(20)]
        public string? Name { get; set; }

        public IFormFile Image { get; set; }
    }
}
