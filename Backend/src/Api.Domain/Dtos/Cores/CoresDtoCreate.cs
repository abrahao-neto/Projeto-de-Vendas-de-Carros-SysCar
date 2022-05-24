using System.ComponentModel.DataAnnotations;

namespace Api.Domain.Dtos.Cores
{
    public class CoresDtoCreate
    {
        [Required(ErrorMessage = "Descrição  é campo obrigatório")]
        public string Descricao { get; set; }

    }
}
