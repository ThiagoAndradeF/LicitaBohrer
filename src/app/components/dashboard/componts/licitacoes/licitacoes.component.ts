import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LicitacaoDto } from 'src/app/aplication/api/LicitacaoDto';
import { FilterService } from 'primeng/api';
@Component({
  selector: 'app-licitacoes',
  templateUrl: './licitacoes.component.html',
  styleUrls: ['./licitacoes.component.scss']
})
export class LicitacoesComponent implements OnInit {
  //Váriaveis Creating

  private _NewLicitacao : LicitacaoDto = new LicitacaoDto();
  public get NewLicitacao() : LicitacaoDto {
    return this._NewLicitacao;
  }
  public set NewLicitacao(v : LicitacaoDto) {
    this._NewLicitacao = v;
    console.warn('Licitação adicionada com sucesso' + v.dataAberturaProposta);
    this.ListLicitacoes.push(v);
  }

  public _pregao?:string;
  public _numeroEdital?:number;
  public _orgaoEmissor?:string;
  public _tipoLicitacao?:string;
  public _dataAberturaProposta?:Date;
  public _dataLimiteProposta?:Date;
  public _dataPublicacaoEdital?:Date;
  public _portal?:string;

  public _valueDateInitial?:Date;
  //Variáveis controle
  public ShowDialogAdicionar:boolean = false;
  public filtroDataAbertura?: Date;
  // Listas
  public ListLicitacoes:LicitacaoDto[] = [];
  public ListTipoLicitacao:string[] = ['Aquisição', 'Pesquisa de Preços'];
  public ListPortais:string[] = [
    'Comprasnet',
    'Portal de Compras Públicas',
    'Licitações-e',
    'Portal de Compras da Caixa Econômica Federal',
    'Bolsa Eletrônica de Compras de São Paulo (BEC-SP)',
    'Portal de Compras SC',
    'Portal de Compras Eletrônicas RS',
    'ComprasNet.GO',
    'Portal de Compras Amazonas',
    'Pernambuco Integrado',
    'BBM – Bolsa Brasileira de Mercadorias'
]

  constructor(private datePipe: DatePipe, private filterService: FilterService){

  }
  ngOnInit(){

  }

  public filtrarPorData() {
    if (this.filtroDataAbertura ) {
      this.ListLicitacoes = this.ListLicitacoes.filter(licitacao =>{ debugger
        if(licitacao.dataAberturaProposta &&  this.filtroDataAbertura){
          var  dataFiltro= new Date(licitacao.dataAberturaProposta).toDateString()
          debugger
          var dataCompara =  this.filtroDataAbertura.toDateString()
          debugger
          dataFiltro === dataCompara;
        }
      }

      );}
      var listaLiscitacoes = this.ListLicitacoes
      debugger
    }


  formatDate(data: Date): string  {
    var dataFormatada = this.datePipe.transform(data, 'dd/MM/yyyy HH:mm', 'UTC');
    if(typeof dataFormatada === 'string')
      return dataFormatada;
    else
      return 'Data não informada'
  }
  public showAdicionarNovaLicitacao(){
    this.ShowDialogAdicionar = true;
  }
  public adicionarLicitacao() {
    var novaLicitacao = new LicitacaoDto();
    novaLicitacao.tipoLicitacao = this._tipoLicitacao;
    novaLicitacao.portal = this._portal;
    novaLicitacao.pregao = this._pregao;
    novaLicitacao.dataFechamentoProposta = this._dataLimiteProposta;
    novaLicitacao.dataAberturaProposta = this._dataAberturaProposta;
    novaLicitacao.numeroEdital = this._numeroEdital;
    novaLicitacao.dataPublicacaoEdital = this._dataPublicacaoEdital;
    this.NewLicitacao = novaLicitacao;

    this.ShowDialogAdicionar = false;
    this._pregao ='';
    this._numeroEdital=0;
    this._orgaoEmissor='';
    this._tipoLicitacao='';
    this._dataAberturaProposta= this._valueDateInitial;
    this._dataLimiteProposta= this._valueDateInitial;
    this._dataPublicacaoEdital= this._valueDateInitial;
    this._portal='';
  }

}
