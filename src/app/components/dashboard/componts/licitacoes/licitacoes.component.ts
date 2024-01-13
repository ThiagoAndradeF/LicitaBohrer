import { Component } from '@angular/core';
import { LicitacaoCreateDto } from 'src/app/aplication/api/LicitacaoCreateDto';
import { LicitacaoDto } from 'src/app/aplication/api/LicitacaoDto';

@Component({
  selector: 'app-licitacoes',
  templateUrl: './licitacoes.component.html',
  styleUrls: ['./licitacoes.component.scss']
})
export class LicitacoesComponent {
  //Váriaveis Creating
  public LicitacaoCreating?:LicitacaoCreateDto = new LicitacaoCreateDto();
  public _pregao?:string;
  public _numeroEdital?:number;
  public _orgaoEmissor?:string;
  public _tipoLicitacao?:string;
  public _dataAberturaProposta?:Date;
  public _dataLimiteProposta?:Date;
  public _dataPublicacaoEdital?:Date;
  public _portal?:string;
  //Variáveis controle
  public ShowDialogAdicionar:boolean = false;



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





  public showAdicionarNovaLicitacao(){
    this.ShowDialogAdicionar = true;
  }
  public onUpload(event:any) {
    // O evento contém os arquivos enviados
    // Aqui você pode manipular os arquivos ou enviar para o servidor
  }

}
