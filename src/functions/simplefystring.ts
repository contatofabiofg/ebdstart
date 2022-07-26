
export const simplefystring = function(string: string): string {
   return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s/g, '');
           
        
}