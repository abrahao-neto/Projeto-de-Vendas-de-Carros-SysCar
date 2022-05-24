using System;
using Api.Data.Mapping;
using Api.Data.Seeds;
using Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.Data.Context
{
    public class MyContext : DbContext
    {
        public DbSet<UserEntity> Users { get; set; }

        public MyContext(DbContextOptions<MyContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<UserEntity>(new UserMap().Configure);

            modelBuilder.Entity<UfEntity>(new UfMap().Configure);
            modelBuilder.Entity<MunicipioEntity>(new MunicipioMap().Configure);
            modelBuilder.Entity<CepEntity>(new CepMap().Configure);
            modelBuilder.Entity<CarrosEntity>(new CarrosMap().Configure);
            modelBuilder.Entity<CoresEntity>(new CoresMap().Configure);
            modelBuilder.Entity<TiposCarroEntity>(new TiposCarroMap().Configure);
            modelBuilder.Entity<VendasCarroEntity>(new VendasCarroMap().Configure);

            modelBuilder.Entity<UserEntity>().HasData(
                new UserEntity
                {
                    Id = Guid.NewGuid(),
                    Name = "Administrador",
                    Email = "abrahao.oliveira.neto@gmail.com",
                    CreateAt = DateTime.Now,
                    UpdateAt = DateTime.Now,
                }
            );

            UfSeeds.Ufs(modelBuilder);
        }

    }
}