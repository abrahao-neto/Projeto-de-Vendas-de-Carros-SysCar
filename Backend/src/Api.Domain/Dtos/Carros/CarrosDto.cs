using System;
using Api.Domain.Entities;

namespace Api.Domain.Dtos.Carros
{
    public class CarrosDto
    {
        public Guid Id { get; set; }
        public string Nome_Carro { get; set; }
        public Guid CoresCarroId { get; set; }
        public Guid TiposCarroId { get; set; }
    }
}
