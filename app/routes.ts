import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route(
    'produto/consignado/consignado-federal',
    'routes/consignado-federal.tsx'
  ),
  route(
    'produto/consignado/consignado-publico',
    'routes/consignado-publico.tsx'
  ),
  route(
    'produto/consignado/consignado-privado',
    'routes/consignado-privado.tsx'
  ),
  route('produto/consignado/consignado-inss', 'routes/consignado-inss.tsx'),

  route(
    'produto/imobiliario/financiamento-imovel',
    'routes/financiamento-imovel.tsx'
  ),
  route('produto/imobiliario/home-equity', 'routes/home-equity.tsx'),

  route('produto/credito/credito-pessoal', 'routes/credito-pessoal.tsx'),
  route(
    'produto/credito/fgts-saque-aniversario',
    'routes/fgts-saque-aniversario.tsx'
  ),
  route(
    'produto/credito/financiamento-refinanciamento-veiculos',
    'routes/credito/financiamento-refinanciamento-veiculos.tsx'
  ),
] satisfies RouteConfig;
