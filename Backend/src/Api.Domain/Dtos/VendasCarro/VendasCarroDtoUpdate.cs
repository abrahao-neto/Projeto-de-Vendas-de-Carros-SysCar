using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Domain.Dtos.VendasCarro
{
    public class VendasCarroDtoUpdate
    {
        [Required(ErrorMessage = "Id é campo Obrigatorio")]
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Data é campo obrigatório")]
        public DateTime Data_Venda_Carro { get; set; }

        [Required(ErrorMessage = "Valor é campo obrigatório")]
        public decimal Valor_Venda_Carro { get; set; }

        public bool Ativo_Venda_Carro { get; set; }

        [Required(ErrorMessage = "CarrosId é campo obrigatório")]
        public Guid CarrosId { get; set; }

    }
}
