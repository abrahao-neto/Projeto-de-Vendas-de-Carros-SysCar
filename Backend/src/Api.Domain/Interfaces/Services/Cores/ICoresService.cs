using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.Dtos.Cores;

namespace Api.Domain.Interfaces.Services.Cores
{
    public interface ICoresService
    {
        Task<CoresDto> Get(Guid id);
        Task<IEnumerable<CoresDto>> GetAll();
        Task<CoresDtoCreateResult> Post(CoresDtoCreate cores);
        Task<CoresDtoUpdateResult> Put(CoresDtoUpdate cores);
        Task<bool> Delete(Guid id);
    }
}
