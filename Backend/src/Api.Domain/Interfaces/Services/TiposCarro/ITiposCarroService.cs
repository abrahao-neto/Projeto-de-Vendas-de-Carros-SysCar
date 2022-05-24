using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.Dtos.TiposCarro;

namespace Api.Domain.Interfaces.Services.TiposCarro
{
    public interface ITiposCarroService
    {
        Task<TiposCarroDto> Get(Guid id);
        Task<IEnumerable<TiposCarroDto>> GetAll();
        Task<TiposCarroDtoCreateResult> Post(TiposCarroDtoCreate Tiposcarro);
        Task<TiposCarroDtoUpdateResult> Put(TiposCarroDtoUpdate Tiposcarro);
        Task<bool> Delete(Guid id);
    }
}
