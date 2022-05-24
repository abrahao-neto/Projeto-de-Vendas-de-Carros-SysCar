using System;
using System.ComponentModel.DataAnnotations;
using Api.Domain.Entities;

namespace Api.Domain.Dtos.Carros
{
    public class CarrosDtoCreate
    {
        [Required(ErrorMessage = "Carro é campo obrigatório")]
        public string Nome_Carro { get; set; }

        [Required(ErrorMessage = "Cores CarroId é campo obrigatório")]
        public Guid CoresCarroId { get; set; }

        [Required(ErrorMessage = "Tipos CarroId é campo obrigatório")]
        public Guid TiposCarroId { get; set; }
    }


}
