using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Domain.Dtos.Carros
{
    public class CarrosDtoUpdate
    {
        [Required(ErrorMessage = "Id é campo Obrigatorio")]
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Nome do Carro é campo Obrigatorio")]
        public string Nome_Carro { get; set; }

        [Required(ErrorMessage = "Cores CarroId é campo obrigatório")]
        public Guid CoresCarroId { get; set; }

        [Required(ErrorMessage = "Tipos CarroId é campo obrigatório")]
        public Guid TiposCarroId { get; set; }
    }
}
