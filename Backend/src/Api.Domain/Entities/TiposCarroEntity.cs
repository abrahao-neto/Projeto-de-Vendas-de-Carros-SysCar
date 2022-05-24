using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Domain.Entities
{
    public class TiposCarroEntity : BaseEntity
    {
        [Required]
        [MaxLength(45)]
        public string Descricao { get; set; }

        public IEnumerable<CarrosEntity> Carros { get; set; }
    }
}
