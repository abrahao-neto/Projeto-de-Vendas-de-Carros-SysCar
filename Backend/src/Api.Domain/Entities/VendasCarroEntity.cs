using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace Api.Domain.Entities
{
    public class VendasCarroEntity : BaseEntity
    {
        [Required]
        public DateTime Data_Venda_Carro { get; set; }

        [Required]
        public decimal Valor_Venda_Carro { get; set; }

        [Required]
        public bool Ativo_Venda_Carro { get; set; }

        public CarrosEntity Carros { get; set; }
    }
}
