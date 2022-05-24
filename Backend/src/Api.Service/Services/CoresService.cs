using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.Dtos.Cores;
using Api.Domain.Entities;
using Api.Domain.Interfaces.Services.Cores;
using Api.Domain.Models;
using Api.Domain.Repository;
using AutoMapper;

namespace Api.Service.Services
{
    public class CoresService : ICoresService
    {
        private ICoresRepository _repository;
        private readonly IMapper _mapper;

        public CoresService(ICoresRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<CoresDto> Get(Guid id)
        {
            var entity = await _repository.SelectAsync(id);
            return _mapper.Map<CoresDto>(entity);
        }

        public async Task<IEnumerable<CoresDto>> GetAll()
        {
            var listEntity = await _repository.SelectAsync();
            return _mapper.Map<IEnumerable<CoresDto>>(listEntity);
        }

        public async Task<CoresDtoCreateResult> Post(CoresDtoCreate descricao)
        {
            var model = _mapper.Map<CoresModel>(descricao);
            var entity = _mapper.Map<CoresEntity>(model);
            var result = await _repository.InsertAsync(entity);

            return _mapper.Map<CoresDtoCreateResult>(result);
        }

        public async Task<CoresDtoUpdateResult> Put(CoresDtoUpdate descricao)
        {
            var model = _mapper.Map<CoresModel>(descricao);
            var entity = _mapper.Map<CoresEntity>(model);

            var result = await _repository.UpdateAsync(entity);
            return _mapper.Map<CoresDtoUpdateResult>(result);
        }

        public async Task<bool> Delete(Guid id)
        {
            return await _repository.DeleteAsync(id);
        }
    }
}
