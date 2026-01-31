export interface Quotation {
  policyId: string;           
  createdAt: string;          
  vigenciaDesde?: string;      
  vigenciaHasta?: string;              
  brokerKey: string;          
  cedula: string;             
  placa: string;              
  nombre: string;            
  vehiculo?: string;          
  marca?: string;             
  modelo?: string;           
  valorPrima?: number;
  planName?: string;        
  // [k: string]: unknown;
}