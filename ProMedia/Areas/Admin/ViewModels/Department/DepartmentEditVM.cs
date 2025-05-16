using System.ComponentModel.DataAnnotations;

namespace ProMedia.Areas.Admin.ViewModels.Department
{
    public class DepartmentEditVM
    {
        public string Description { get; set; }
        [Required(ErrorMessage = "This input can't be empty")]
        [StringLength(20)]
        public string Name { get; set; }

        public string Image { get; set; }

        public IFormFile NewImage { get; set; }
    }
}
