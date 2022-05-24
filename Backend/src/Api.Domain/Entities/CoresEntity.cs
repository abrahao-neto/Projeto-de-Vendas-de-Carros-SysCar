using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace Api.Domain.Entities
{
    public class CoresEntity : BaseEntity
    {
        [Required]
        [MaxLength(45)]
        public string Descricao { get; set; }

        public IEnumerable<CarrosEntity> Carros { get; set; }
    }
}
