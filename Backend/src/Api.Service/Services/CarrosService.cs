using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.Dtos.Carros;
using Api.Domain.Entities;
using Api.Domain.Interfaces.Services.Carros;
using Api.Domain.Models;
using Api.Domain.Repository;
using AutoMapper;

namespace Api.Service.Services
{
    public class CarrosService : ICarrosService
    {
        private ICarrosRepository _repository;
        private readonly IMapper _mapper;

        public CarrosService(ICarrosRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<CarrosDto> Get(Guid id)
        {
            var entity = await _repository.SelectAsync(id);
            return _mapper.Map<CarrosDto>(entity);
        }

        public async Task<IEnumerable<CarrosDto>> GetAll()
        {
            var listEntity = await _repository.SelectAsync();
            return _mapper.Map<IEnumerable<CarrosDto>>(listEntity);
        }

        public async Task<CarrosDtoCreateResult> Post(CarrosDtoCreate nomeCarro)
        {
            var model = _mapper.Map<CarrosModel>(nomeCarro);
            var entity = _mapper.Map<CarrosEntity>(model);
            var result = await _repository.InsertAsync(entity);

            return _mapper.Map<CarrosDtoCreateResult>(result);
        }

        public async Task<CarrosDtoUpdateResult> Put(CarrosDtoUpdate nomeCarro)
        {
            var model = _mapper.Map<CarrosModel>(nomeCarro);
            var entity = _mapper.Map<CarrosEntity>(model);

            var result = await _repository.UpdateAsync(entity);
            return _mapper.Map<CarrosDtoUpdateResult>(result);
        }

        public async Task<bool> Delete(Guid id)
        {
            return await _repository.DeleteAsync(id);
        }

    }
}
