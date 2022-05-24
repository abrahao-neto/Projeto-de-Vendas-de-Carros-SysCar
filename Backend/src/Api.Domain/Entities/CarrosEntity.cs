using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Api.Domain.Entities
{
    public class CarrosEntity : BaseEntity
    {

        [Required]
        [MaxLength(20)]
        public string Nome_Carro { get; set; }

        [Required]
        [MaxLength(20)]
        public TiposCarroEntity TiposCarro { get; set; }

        [Required]
        [MaxLength(15)]
        public CoresEntity CoresCarro { get; set; }

        [Required]
        public Guid CoresCarroId { get; set; }

        [Required]
        public Guid TiposCarroId { get; set; }

        public IEnumerable<VendasCarroEntity> VendasCarros { get; set; }
    }
}
