using System;

namespace Api.Domain.Models
{
    public class VendasCarroModel : BaseModel
    {
        private DateTime _Data_Venda_Carro;
        public DateTime Data_Venda_Carro
        {
            get { return _Data_Venda_Carro; }
            set { _Data_Venda_Carro = value; }
        }

        private decimal _Valor_Venda_Carro;
        public decimal Valor_Venda_Carro
        {
            get { return _Valor_Venda_Carro; }
            set { _Valor_Venda_Carro = value; }
        }

        private bool _Ativo_Venda_Carro;
        public bool Ativo_Venda_Carro
        {
            get { return _Ativo_Venda_Carro; }
            set { _Ativo_Venda_Carro = value; }
        }
    }
}
