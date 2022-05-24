using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Domain.Dtos.Cores
{
    public class CoresDtoUpdate
    {

        [Required(ErrorMessage = "Id é campo Obrigatorio")]
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Descrição é campo Obrigatorio")]
        public string Descricao { get; set; }

    }
}
