export const getNameInitials = (string) => {
// regex to cut First Name and Second Name and return initial
  let name = string;
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
  
  let initials = [...name.matchAll(rgx)] || [];
  
  initials = (
    (initials.shift()?.[1] || '')+('.')+(initials.pop()?.[1] || '')
  ).toUpperCase();

    return initials
  }