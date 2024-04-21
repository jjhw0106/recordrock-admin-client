// import { useEffect, useState } from "react";

import { getGuideLineDocsByDelimiter } from "api/guideLine";
import { useState } from "react"

export async function filterByDelimiter(delimiter: string) {
  return await getGuideLineDocsByDelimiter(delimiter);
} 