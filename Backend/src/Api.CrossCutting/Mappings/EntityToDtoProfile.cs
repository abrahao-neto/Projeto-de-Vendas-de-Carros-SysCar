using Api.Domain.Dtos.Carros;
using Api.Domain.Dtos.Cep;
using Api.Domain.Dtos.Cores;
using Api.Domain.Dtos.Municipio;
using Api.Domain.Dtos.TiposCarro;
using Api.Domain.Dtos.Uf;
using Api.Domain.Dtos.User;
using Api.Domain.Dtos.VendasCarro;
using Api.Domain.Entities;
using AutoMapper;

namespace Api.CrossCutting.Mappings
{
    public class EntityToDtoProfile : Profile
    {
        public EntityToDtoProfile()
        {
            CreateMap<UserDto, UserEntity>()
               .ReverseMap();

            CreateMap<UserDtoCreateResult, UserEntity>()
               .ReverseMap();

            CreateMap<UserDtoUpdateResult, UserEntity>()
               .ReverseMap();

            CreateMap<UfDto, UfEntity>()
               .ReverseMap();

            CreateMap<MunicipioDto, MunicipioEntity>()
               .ReverseMap();

            CreateMap<MunicipioDtoCompleto, MunicipioEntity>()
               .ReverseMap();

            CreateMap<MunicipioDtoCreateResult, MunicipioEntity>()
               .ReverseMap();

            CreateMap<MunicipioDtoUpdateResult, MunicipioEntity>()
               .ReverseMap();

            CreateMap<CepDto, CepEntity>()
               .ReverseMap();

            CreateMap<CepDtoCreateResult, CepEntity>()
               .ReverseMap();

            CreateMap<CepDtoUpdateResult, CepEntity>()
               .ReverseMap();

            //Começo dos projeto
            CreateMap<CarrosDto, CarrosEntity>()
            .ReverseMap();

            CreateMap<CarrosDtoCreateResult, CarrosEntity>()
               .ReverseMap();

            CreateMap<CarrosDtoUpdateResult, CarrosEntity>()
               .ReverseMap();

            CreateMap<CoresDto, CoresEntity>()
        .ReverseMap();

            CreateMap<CoresDtoCreateResult, CoresEntity>()
               .ReverseMap();

            CreateMap<CoresDtoUpdateResult, CoresEntity>()
               .ReverseMap();

            CreateMap<TiposCarroDto, TiposCarroEntity>()
        .ReverseMap();

            CreateMap<TiposCarroDtoCreateResult, TiposCarroEntity>()
               .ReverseMap();

            CreateMap<TiposCarroDtoUpdateResult, TiposCarroEntity>()
               .ReverseMap();

            CreateMap<VendasCarroDto, VendasCarroEntity>()
            .ReverseMap();

            CreateMap<VendasCarroDtoCreateResult, VendasCarroEntity>()
               .ReverseMap();

            CreateMap<VendasCarroDtoUpdateResult, VendasCarroEntity>()
               .ReverseMap();

        }
    }
}
