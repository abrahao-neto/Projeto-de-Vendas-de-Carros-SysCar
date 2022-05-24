using Api.Domain.Interfaces.Services.Carros;
using Api.Domain.Interfaces.Services.Cep;
using Api.Domain.Interfaces.Services.Cores;
using Api.Domain.Interfaces.Services.Municipio;
using Api.Domain.Interfaces.Services.TiposCarro;
using Api.Domain.Interfaces.Services.Uf;
using Api.Domain.Interfaces.Services.User;
using Api.Domain.Interfaces.Services.VendasCarro;
using Api.Service.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Api.CrossCutting.DependencyInjection
{
    public class ConfigureService
    {
        public static void ConfigureDependenciesService(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IUserService, UserService>();
            serviceCollection.AddTransient<ILoginService, LoginService>();

            serviceCollection.AddTransient<IUfService, UfService>();
            serviceCollection.AddTransient<IMunicipioService, MunicipioService>();
            serviceCollection.AddTransient<ICepService, CepService>();
            serviceCollection.AddTransient<ICarrosService, CarrosService>();
            serviceCollection.AddTransient<ICoresService, CoresService>();
            serviceCollection.AddTransient<ITiposCarroService, TiposCarroService>();
            serviceCollection.AddTransient<IVendasCarroService, VendasCarroService>();
        }
    }
}
