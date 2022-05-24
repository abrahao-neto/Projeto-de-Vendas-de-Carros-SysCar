using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Domain.Dtos.TiposCarro
{
    public class TiposCarroDtoUpdate
    {

        [Required(ErrorMessage = "Id é campo Obrigatorio")]
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Descrição é campo obrigatório")]
        public string Descrição { get; set; }
    }
}
