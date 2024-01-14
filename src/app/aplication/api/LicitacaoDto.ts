export class LicitacaoDto {
  pregao?:string;
  orgaoEmissor?:string;
  numeroEdital?:number;
  tipoLicitacao?:string;
  portal?:string;
  dataAberturaProposta?:Date;
  dataFechamentoProposta?:Date;
  dataPublicacaoEdital?:Date;
  status?:string;
}
