using Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Data.Mapping
{
    public class CoresMap : IEntityTypeConfiguration<CoresEntity>
    {
        public void Configure(EntityTypeBuilder<CoresEntity> builder)
        {
            builder.ToTable("Cores");

            builder.HasKey(prop => prop.Id);

            builder.HasKey(u => u.Id);

            builder.HasIndex(u => u.Descricao);
        }
    }
}
