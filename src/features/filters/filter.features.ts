// import { useEffect, useState } from "react";

import { getGuideLineDocsByDelimiter } from "api/guideLine";

export async function filterByDelimiter(delimiter: string) {
  return await getGuideLineDocsByDelimiter(delimiter);
} 