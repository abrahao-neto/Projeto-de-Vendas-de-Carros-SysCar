using Api.Domain.Dtos.Carros;
using Api.Domain.Dtos.Cep;
using Api.Domain.Dtos.Cores;
using Api.Domain.Dtos.Municipio;
using Api.Domain.Dtos.TiposCarro;
using Api.Domain.Dtos.Uf;
using Api.Domain.Dtos.User;
using Api.Domain.Dtos.VendasCarro;
using Api.Domain.Models;
using AutoMapper;

namespace Api.CrossCutting.Mappings
{
    public class DtoToModelProfile : Profile
    {
        public DtoToModelProfile()
        {
            #region User
            CreateMap<UserModel, UserDto>()
                .ReverseMap();
            CreateMap<UserModel, UserDtoCreate>()
                .ReverseMap();
            CreateMap<UserModel, UserDtoUpdate>()
                .ReverseMap();
            #endregion

            #region UF
            CreateMap<UfModel, UfDto>()
                .ReverseMap();
            #endregion

            #region Municipio
            CreateMap<MunicipioModel, MunicipioDto>()
                .ReverseMap();
            CreateMap<MunicipioModel, MunicipioDtoCreate>()
                .ReverseMap();
            CreateMap<MunicipioModel, MunicipioDtoUpdate>()
                .ReverseMap();
            #endregion

            #region CEP
            CreateMap<CepModel, CepDto>()
                .ReverseMap();
            CreateMap<CepModel, CepDtoCreate>()
                .ReverseMap();
            CreateMap<CepModel, CepDtoUpdate>()
                .ReverseMap();
            #endregion

            #region CARROS
            CreateMap<CarrosModel, CarrosDto>()
                .ReverseMap();
            CreateMap<CarrosModel, CarrosDtoCreate>()
                .ReverseMap();
            CreateMap<CarrosModel, CarrosDtoUpdate>()
                .ReverseMap();
            #endregion

            #region CORES
            CreateMap<CoresModel, CoresDto>()
                .ReverseMap();
            CreateMap<CoresModel, CoresDtoCreate>()
                .ReverseMap();
            CreateMap<CoresModel, CoresDtoUpdate>()
                .ReverseMap();
            #endregion

            #region TIPOSCARRO
            CreateMap<TiposCarroModel, TiposCarroDto>()
                .ReverseMap();
            CreateMap<TiposCarroModel, TiposCarroDtoCreate>()
                .ReverseMap();
            CreateMap<TiposCarroModel, TiposCarroDtoUpdate>()
                .ReverseMap();
            #endregion

            #region VENDASCARRO
            CreateMap<VendasCarroModel, VendasCarroDto>()
                .ReverseMap();
            CreateMap<VendasCarroModel, VendasCarroDtoCreate>()
                .ReverseMap();
            CreateMap<VendasCarroModel, VendasCarroDtoUpdate>()
                .ReverseMap();
            #endregion

        }

    }
}
