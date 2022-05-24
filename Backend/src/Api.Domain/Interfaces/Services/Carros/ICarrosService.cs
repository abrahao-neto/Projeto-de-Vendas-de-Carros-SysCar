using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.Dtos.Carros;

namespace Api.Domain.Interfaces.Services.Carros
{
    public interface ICarrosService
    {
        Task<CarrosDto> Get(Guid id);
        Task<IEnumerable<CarrosDto>> GetAll();
        Task<CarrosDtoCreateResult> Post(CarrosDtoCreate carros);
        Task<CarrosDtoUpdateResult> Put(CarrosDtoUpdate carros);
        Task<bool> Delete(Guid id);
    }
}
