export class LicitacaoCreateDto {
  pregao?:string;
  orgaoEmissor?:string;
  dataFinal?:Date;
  dataPublicacao?:Date;
  dataExpiracao?:Date;
  tipoLicitação?:number;
}
