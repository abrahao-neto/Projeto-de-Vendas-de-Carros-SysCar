using Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Data.Mapping
{
    public class VendasCarroMap : IEntityTypeConfiguration<VendasCarroEntity>
    {
        public void Configure(EntityTypeBuilder<VendasCarroEntity> builder)
        {
            builder.ToTable("Vendas_Carro");

            builder.HasKey(u => u.Id);

            builder.HasIndex(c => c.Data_Venda_Carro);

            builder.HasIndex(c => c.Valor_Venda_Carro);

            builder.HasIndex(c => c.Ativo_Venda_Carro);

            builder.HasOne(c => c.Carros)
                   .WithMany(v => v.VendasCarros);
        }
    }
}
