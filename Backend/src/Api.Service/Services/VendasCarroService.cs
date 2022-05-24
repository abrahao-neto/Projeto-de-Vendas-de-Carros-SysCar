using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.Dtos.VendasCarro;
using Api.Domain.Entities;
using Api.Domain.Models;
using Api.Domain.Interfaces.Services.VendasCarro;
using Api.Domain.Repository;
using AutoMapper;

namespace Api.Service.Services
{
    public class VendasCarroService : IVendasCarroService
    {
        private IVendasCarroRepository _repository;
        private readonly IMapper _mapper;

        public VendasCarroService(IVendasCarroRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<VendasCarroDto> Get(Guid id)
        {
            var entity = await _repository.SelectAsync(id);
            return _mapper.Map<VendasCarroDto>(entity);
        }

        public async Task<IEnumerable<VendasCarroDto>> GetAll()
        {
            var listEntity = await _repository.SelectAsync();
            return _mapper.Map<IEnumerable<VendasCarroDto>>(listEntity);
        }

        public async Task<VendasCarroDtoCreateResult> Post(VendasCarroDtoCreate vendas)
        {
            var model = _mapper.Map<VendasCarroModel>(vendas);
            var entity = _mapper.Map<VendasCarroEntity>(model);
            var result = await _repository.InsertAsync(entity);

            return _mapper.Map<VendasCarroDtoCreateResult>(result);
        }

        public async Task<VendasCarroDtoUpdateResult> Put(VendasCarroDtoUpdate vendas)
        {
            var model = _mapper.Map<VendasCarroModel>(vendas);
            var entity = _mapper.Map<VendasCarroEntity>(model);

            var result = await _repository.UpdateAsync(entity);
            return _mapper.Map<VendasCarroDtoUpdateResult>(result);
        }

        public async Task<bool> Delete(Guid id)
        {
            return await _repository.DeleteAsync(id);
        }

    }
}
