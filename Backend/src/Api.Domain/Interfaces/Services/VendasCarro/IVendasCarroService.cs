using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.Dtos.VendasCarro;

namespace Api.Domain.Interfaces.Services.VendasCarro
{
    public interface IVendasCarroService
    {
        Task<VendasCarroDto> Get(Guid id);
        Task<IEnumerable<VendasCarroDto>> GetAll();
        Task<VendasCarroDtoCreateResult> Post(VendasCarroDtoCreate Vendascarro);
        Task<VendasCarroDtoUpdateResult> Put(VendasCarroDtoUpdate Vendascarro);
        Task<bool> Delete(Guid id);
    }
}
