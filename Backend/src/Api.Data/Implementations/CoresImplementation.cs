using System.Threading.Tasks;
using Api.Data.Context;
using Api.Data.Repository;
using Api.Domain.Entities;
using Api.Domain.Repository;
using Microsoft.EntityFrameworkCore;

namespace Api.Data.Implementations
{
    public class CoresImplementation : BaseRepository<CoresEntity>, ICoresRepository
    {
        public CoresImplementation(MyContext context) : base(context)
        {
        }
    }
}
