using System;

namespace Api.Domain.Models
{
    public class CarrosModel : BaseModel
    {
        private string _nome_carro;
        public string Nome_Carro
        {
            get { return _nome_carro; }
            set { _nome_carro = value; }
        }

        private Guid _TipoCarroId;
        public Guid TipoCarroId
        {
            get { return _TipoCarroId; }
            set { TipoCarroId = value; }
        }

        private Guid _CoresCarroId;
        public Guid CoresCarroId
        {
            get { return _CoresCarroId; }
            set { CoresCarroId = value; }
        }

    }
}
