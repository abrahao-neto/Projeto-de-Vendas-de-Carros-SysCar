using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Data.Context;
using Api.Data.Repository;
using Api.Domain.Entities;
using Api.Domain.Repository;
using Microsoft.EntityFrameworkCore;

namespace Api.Data.Implementations
{
    public class VendasCarroImplementation : BaseRepository<VendasCarroEntity>, IVendasCarroRepository
    {
        public VendasCarroImplementation(MyContext context) : base(context)
        {
        }
    }
}
