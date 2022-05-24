using System;

namespace Api.Domain.Dtos.Carros
{
    public class CarrosDtoCreateResult
    {
        public Guid Id { get; set; }
        public string Nome_Carro { get; set; }
        public Guid CoresCarroId { get; set; }
        public Guid TiposCarroId { get; set; }
    }
}
