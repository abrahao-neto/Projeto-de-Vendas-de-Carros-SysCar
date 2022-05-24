using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class VendasCarro : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cores",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    Descricao = table.Column<string>(type: "varchar(45)", maxLength: 45, nullable: false),
                    CreateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    UpdateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tipos_Carro",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    Descricao = table.Column<string>(type: "varchar(45)", maxLength: 45, nullable: false),
                    CreateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    UpdateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tipos_Carro", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Uf",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    Sigla = table.Column<string>(type: "varchar(2)", maxLength: 2, nullable: false),
                    Nome = table.Column<string>(type: "varchar(45)", maxLength: 45, nullable: false),
                    CreateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    UpdateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Uf", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    Name = table.Column<string>(type: "varchar(60)", maxLength: 60, nullable: false),
                    Email = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true),
                    CreateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    UpdateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Carros",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    Nome_Carro = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: false),
                    CoresCarroId = table.Column<Guid>(type: "char(36)", nullable: false),
                    TiposCarroId = table.Column<Guid>(type: "char(36)", nullable: false),
                    CreateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    UpdateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carros", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Carros_Cores_CoresCarroId",
                        column: x => x.CoresCarroId,
                        principalTable: "Cores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Carros_Tipos_Carro_TiposCarroId",
                        column: x => x.TiposCarroId,
                        principalTable: "Tipos_Carro",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Municipio",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    Nome = table.Column<string>(type: "varchar(60)", maxLength: 60, nullable: false),
                    CodIBGE = table.Column<int>(type: "int", nullable: false),
                    UfId = table.Column<Guid>(type: "char(36)", nullable: false),
                    CreateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    UpdateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Municipio", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Municipio_Uf_UfId",
                        column: x => x.UfId,
                        principalTable: "Uf",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vendas_Carro",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    Data_Venda_Carro = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Valor_Venda_Carro = table.Column<decimal>(type: "decimal(65,30)", nullable: false),
                    Ativo_Venda_Carro = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    CarrosId = table.Column<Guid>(type: "char(36)", nullable: true),
                    CreateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    UpdateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vendas_Carro", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vendas_Carro_Carros_CarrosId",
                        column: x => x.CarrosId,
                        principalTable: "Carros",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Cep",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false),
                    Cep = table.Column<string>(type: "varchar(10)", maxLength: 10, nullable: false),
                    Logradouro = table.Column<string>(type: "varchar(60)", maxLength: 60, nullable: false),
                    Numero = table.Column<string>(type: "varchar(10)", maxLength: 10, nullable: true),
                    MunicipioId = table.Column<Guid>(type: "char(36)", nullable: false),
                    CreateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    UpdateAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cep", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cep_Municipio_MunicipioId",
                        column: x => x.MunicipioId,
                        principalTable: "Municipio",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Uf",
                columns: new[] { "Id", "CreateAt", "Nome", "Sigla", "UpdateAt" },
                values: new object[,]
                {
                    { new Guid("22ffbd18-cdb9-45cc-97b0-51e97700bf71"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8867), "Acre", "AC", null },
                    { new Guid("e7e416de-477c-4fa3-a541-b5af5f35ccf6"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9038), "São Paulo", "SP", null },
                    { new Guid("fe8ca516-034f-4249-bc5a-31c85ef220ea"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9035), "Sergipe", "SE", null },
                    { new Guid("b81f95e0-f226-4afd-9763-290001637ed4"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9032), "Santa Catarina", "SC", null },
                    { new Guid("88970a32-3a2a-4a95-8a18-2087b65f59d1"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9028), "Rio Grande do Sul", "RS", null },
                    { new Guid("9fd3c97a-dc68-4af5-bc65-694cca0f2869"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9025), "Roraima", "RR", null },
                    { new Guid("924e7250-7d39-4e8b-86bf-a8578cbf4002"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9022), "Rondônia", "RO", null },
                    { new Guid("542668d1-50ba-4fca-bbc3-4b27af108ea3"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9019), "Rio Grande do Norte", "RN", null },
                    { new Guid("43a0f783-a042-4c46-8688-5dd4489d2ec7"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9015), "Rio de Janeiro", "RJ", null },
                    { new Guid("1dd25850-6270-48f8-8b77-2f0f079480ab"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9012), "Paraná", "PR", null },
                    { new Guid("f85a6cd0-2237-46b1-a103-d3494ab27774"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9008), "Piauí", "PI", null },
                    { new Guid("ad5969bd-82dc-4e23-ace2-d8495935dd2e"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9005), "Pernambuco", "PE", null },
                    { new Guid("1109ab04-a3a5-476e-bdce-6c3e2c2badee"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9000), "Paraíba", "PB", null },
                    { new Guid("8411e9bc-d3b2-4a9b-9d15-78633d64fc7c"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8995), "Pará", "PA", null },
                    { new Guid("29eec4d3-b061-427d-894f-7f0fecc7f65f"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8992), "Mato Grosso", "MT", null },
                    { new Guid("3739969c-fd8a-4411-9faa-3f718ca85e70"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8988), "Mato Grosso do Sul", "MS", null },
                    { new Guid("27f7a92b-1979-4e1c-be9d-cd3bb73552a8"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8984), "Minas Gerais", "MG", null },
                    { new Guid("57a9e9f7-9aea-40fe-a783-65d4feb59fa8"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8981), "Maranhão", "MA", null },
                    { new Guid("837a64d3-c649-4172-a4e0-2b20d3c85224"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8978), "Goiás", "GO", null },
                    { new Guid("c623f804-37d8-4a19-92c1-67fd162862e6"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8975), "Espírito Santo", "ES", null },
                    { new Guid("bd08208b-bfca-47a4-9cd0-37e4e1fa5006"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8971), "Distrito Federal", "DF", null },
                    { new Guid("5ff1b59e-11e7-414d-827e-609dc5f7e333"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8968), "Ceará", "CE", null },
                    { new Guid("5abca453-d035-4766-a81b-9f73d683a54b"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8964), "Bahia", "BA", null },
                    { new Guid("409b9043-88a4-4e86-9cca-ca1fb0d0d35b"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8960), "Amapá", "AP", null },
                    { new Guid("cb9e6888-2094-45ee-bc44-37ced33c693a"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8951), "Amazonas", "AM", null },
                    { new Guid("7cc33300-586e-4be8-9a4d-bd9f01ee9ad8"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(8894), "Alagoas", "AL", null },
                    { new Guid("971dcb34-86ea-4f92-989d-064f749e23c9"), new DateTime(2022, 5, 24, 15, 36, 34, 155, DateTimeKind.Utc).AddTicks(9042), "Tocantins", "TO", null }
                });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "Id", "CreateAt", "Email", "Name", "UpdateAt" },
                values: new object[] { new Guid("7970e321-7549-4984-8c8c-8e7f3e893570"), new DateTime(2022, 5, 24, 12, 36, 34, 150, DateTimeKind.Local).AddTicks(4969), "abrahao.oliveira.neto@gmail.com", "Administrador", new DateTime(2022, 5, 24, 12, 36, 34, 152, DateTimeKind.Local).AddTicks(2257) });

            migrationBuilder.CreateIndex(
                name: "IX_Carros_CoresCarroId",
                table: "Carros",
                column: "CoresCarroId");

            migrationBuilder.CreateIndex(
                name: "IX_Carros_Nome_Carro",
                table: "Carros",
                column: "Nome_Carro");

            migrationBuilder.CreateIndex(
                name: "IX_Carros_TiposCarroId",
                table: "Carros",
                column: "TiposCarroId");

            migrationBuilder.CreateIndex(
                name: "IX_Cep_Cep",
                table: "Cep",
                column: "Cep");

            migrationBuilder.CreateIndex(
                name: "IX_Cep_MunicipioId",
                table: "Cep",
                column: "MunicipioId");

            migrationBuilder.CreateIndex(
                name: "IX_Cores_Descricao",
                table: "Cores",
                column: "Descricao");

            migrationBuilder.CreateIndex(
                name: "IX_Municipio_CodIBGE",
                table: "Municipio",
                column: "CodIBGE");

            migrationBuilder.CreateIndex(
                name: "IX_Municipio_UfId",
                table: "Municipio",
                column: "UfId");

            migrationBuilder.CreateIndex(
                name: "IX_Tipos_Carro_Descricao",
                table: "Tipos_Carro",
                column: "Descricao");

            migrationBuilder.CreateIndex(
                name: "IX_Uf_Sigla",
                table: "Uf",
                column: "Sigla",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_User_Email",
                table: "User",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vendas_Carro_Ativo_Venda_Carro",
                table: "Vendas_Carro",
                column: "Ativo_Venda_Carro");

            migrationBuilder.CreateIndex(
                name: "IX_Vendas_Carro_CarrosId",
                table: "Vendas_Carro",
                column: "CarrosId");

            migrationBuilder.CreateIndex(
                name: "IX_Vendas_Carro_Data_Venda_Carro",
                table: "Vendas_Carro",
                column: "Data_Venda_Carro");

            migrationBuilder.CreateIndex(
                name: "IX_Vendas_Carro_Valor_Venda_Carro",
                table: "Vendas_Carro",
                column: "Valor_Venda_Carro");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cep");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Vendas_Carro");

            migrationBuilder.DropTable(
                name: "Municipio");

            migrationBuilder.DropTable(
                name: "Carros");

            migrationBuilder.DropTable(
                name: "Uf");

            migrationBuilder.DropTable(
                name: "Cores");

            migrationBuilder.DropTable(
                name: "Tipos_Carro");
        }
    }
}
