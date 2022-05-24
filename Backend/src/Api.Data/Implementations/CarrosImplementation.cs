using System.Threading.Tasks;
using Api.Data.Context;
using Api.Data.Repository;
using Api.Domain.Entities;
using Api.Domain.Repository;
using Microsoft.EntityFrameworkCore;

namespace Api.Data.Implementations
{
    public class CarrosImplementation : BaseRepository<CarrosEntity>, ICarrosRepository
    {
        public CarrosImplementation(MyContext context) : base(context)
        {
        }
    }
}
