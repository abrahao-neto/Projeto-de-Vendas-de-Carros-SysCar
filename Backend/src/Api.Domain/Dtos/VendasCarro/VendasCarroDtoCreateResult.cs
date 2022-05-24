using System;

namespace Api.Domain.Dtos.VendasCarro
{
    public class VendasCarroDtoCreateResult
    {
        public Guid Id { get; set; }
        public DateTime Data_Venda_Carro { get; set; }

        public decimal Valor_Venda_Carro { get; set; }

        public bool Ativo_Venda_Carro { get; set; }

        public Guid CarrosId { get; set; }
    }
}
