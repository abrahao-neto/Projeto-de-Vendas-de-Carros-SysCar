using Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Data.Mapping
{
    public class TiposCarroMap : IEntityTypeConfiguration<TiposCarroEntity>
    {
        public void Configure(EntityTypeBuilder<TiposCarroEntity> builder)
        {
            builder.ToTable("Tipos_Carro");

            builder.HasKey(u => u.Id);

            builder.HasIndex(u => u.Descricao);
        }
    }
}
