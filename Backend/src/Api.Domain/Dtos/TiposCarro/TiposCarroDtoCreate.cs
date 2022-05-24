using System.ComponentModel.DataAnnotations;

namespace Api.Domain.Dtos.TiposCarro
{
    public class TiposCarroDtoCreate
    {
        [Required(ErrorMessage = "Descrição é campo obrigatório")]
        public string Descrição { get; set; }
    }
}
