using Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Data.Mapping
{
    public class CarrosMap : IEntityTypeConfiguration<CarrosEntity>
    {
        public void Configure(EntityTypeBuilder<CarrosEntity> builder)
        {
            builder.ToTable("Carros");

            builder.HasKey(u => u.Id);

            builder.HasIndex(u => u.Nome_Carro);

            builder.HasOne(u => u.CoresCarro)
                   .WithMany(c => c.Carros);

            builder.HasOne(u => u.TiposCarro)
                   .WithMany(c => c.Carros);
        }
    }
}
