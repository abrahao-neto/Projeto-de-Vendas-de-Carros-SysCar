using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.Dtos.TiposCarro;
using Api.Domain.Entities;
using Api.Domain.Interfaces.Services.TiposCarro;
using Api.Domain.Models;
using Api.Domain.Repository;
using AutoMapper;

namespace Api.Service.Services
{
    public class TiposCarroService : ITiposCarroService
    {
        private ITiposCarroRepository _repository;
        private readonly IMapper _mapper;

        public TiposCarroService(ITiposCarroRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<TiposCarroDto> Get(Guid id)
        {
            var entity = await _repository.SelectAsync(id);
            return _mapper.Map<TiposCarroDto>(entity);
        }

        public async Task<IEnumerable<TiposCarroDto>> GetAll()
        {
            var listEntity = await _repository.SelectAsync();
            return _mapper.Map<IEnumerable<TiposCarroDto>>(listEntity);
        }

        public async Task<TiposCarroDtoCreateResult> Post(TiposCarroDtoCreate descricao)
        {
            var model = _mapper.Map<TiposCarroModel>(descricao);
            var entity = _mapper.Map<TiposCarroEntity>(model);
            var result = await _repository.InsertAsync(entity);

            return _mapper.Map<TiposCarroDtoCreateResult>(result);
        }

        public async Task<TiposCarroDtoUpdateResult> Put(TiposCarroDtoUpdate cep)
        {
            var model = _mapper.Map<TiposCarroModel>(cep);
            var entity = _mapper.Map<TiposCarroEntity>(model);

            var result = await _repository.UpdateAsync(entity);
            return _mapper.Map<TiposCarroDtoUpdateResult>(result);
        }

        public async Task<bool> Delete(Guid id)
        {
            return await _repository.DeleteAsync(id);
        }
    }
}
