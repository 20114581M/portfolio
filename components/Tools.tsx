import { useState } from "react";

// ── Inline SVG paths from Simple Icons (simpleicons.org) ─────────────────────
const SI: Record<string, string> = {
  gmail:            "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
  microsoftoutlook: "M21.184 0H7.616A2.817 2.817 0 0 0 4.8 2.816v1.017L12.8 6.4l8-2.567V2.816A2.817 2.817 0 0 0 21.184 0zM4.8 6.756V21.3l8-2.057 8 2.057V6.756L12.8 9.323 4.8 6.756zM0 5.333v13.334l3.2.821V4.512L0 5.333zm24 0l-3.2-.821v14.976l3.2-.821V5.333z",
  slack:            "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",
  microsoftteams:   "M19.547 7.518c1.304 0 2.36-1.057 2.36-2.36S20.851 2.8 19.547 2.8a2.36 2.36 0 0 0 0 4.718zm1.722 1.07h-3.444a.86.86 0 0 0-.86.86v5.155c0 3.048 3.552 3.55 4.315 3.55h.01c.58 0 .71-.346.71-.608V9.448a.86.86 0 0 0-.731-.86zM12 12.364a3.15 3.15 0 1 0 0-6.3 3.15 3.15 0 0 0 0 6.3zm2.116 1.133H9.884a1.75 1.75 0 0 0-1.75 1.75v5.733c0 .192.156.347.348.347h7.036a.348.348 0 0 0 .348-.347V15.247a1.75 1.75 0 0 0-1.75-1.75z",
  zoom:             "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.048 15.612c0 .504-.6.78-1.02.468l-2.976-2.172v1.704c0 .828-.672 1.5-1.5 1.5H5.928a1.5 1.5 0 0 1-1.5-1.5V8.4c0-.828.672-1.5 1.5-1.5h6.624c.828 0 1.5.672 1.5 1.5v1.704l2.976-2.172c.42-.312 1.02-.036 1.02.468v6.72z",
  googlemeet:       "M17.525 11.025 21 7.55v8.9l-3.475-3.475-3.15 2.775V9.25l3.15 1.775zM3 8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z",
  skype:            "M10.588 1.225A10.48 10.48 0 0 0 .002 12a10.45 10.45 0 0 0 1.37 5.223A6.18 6.18 0 0 0 5.64 23.75a10.48 10.48 0 0 0 6.278.248A10.48 10.48 0 0 0 24 12a10.45 10.45 0 0 0-1.38-5.24 6.18 6.18 0 0 0-4.286-6.524 10.48 10.48 0 0 0-7.746.989zm1.09 17.274c-3.018 0-4.393-1.484-4.393-2.599 0-.61.453-1.042 1.082-1.042 1.416 0 1.052 2.026 3.311 2.026 1.209 0 1.88-.659 1.88-1.327 0-.404-.202-.853-.988-1.05l-2.614-.655c-2.103-.527-2.486-1.656-2.486-2.716 0-2.202 2.072-3.024 4.023-3.024 1.8 0 3.929.991 3.929 2.31 0 .633-.55 1.0-1.147 1.0-1.234 0-1.021-1.7-2.94-1.7-1.082 0-1.677.49-1.677 1.196 0 .706.861.932 1.61 1.105l1.929.45c2.124.494 2.61 1.677 2.61 2.824 0 1.782-1.368 3.202-4.13 3.202z",
  discord:          "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z",
  whatsapp:         "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.003 2.003a9.998 9.998 0 0 0-8.674 14.953L2.004 22l5.176-1.316A9.998 9.998 0 1 0 12.003 2.003z",
  trello:           "M21 0H3C1.343 0 0 1.343 0 3v18c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.645-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44H9c.795 0 1.44.645 1.44 1.44v13.62zm10.44-6c0 .795-.645 1.44-1.44 1.44H15c-.795 0-1.44-.645-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44v7.62z",
  asana:            "M11.987 14.138l-3.132 3.97a2.5 2.5 0 0 1-4.7-1.011 2.5 2.5 0 0 1 .81-2.7 2.5 2.5 0 0 1 3.516.38l3.508-4.45a2.5 2.5 0 0 1 3.516-.38 2.5 2.5 0 0 1 .81 2.7 2.5 2.5 0 0 1-4.7 1.011zM12 0C5.374 0 0 5.374 0 11s4.925 11 11 11c3.38 0 6.48-1.35 8.59-3.6L17.5 16.3c-1.6 1.75-3.9 2.7-6.5 2.7-4.97 0-9-4.03-9-9s4.03-9 9-9c2.6 0 4.9.95 6.5 2.7l2.09-2.1C17.48 1.35 14.38 0 11 0z",
  googledrive:      "M6.28 0L0 10.93l3.14 5.44L9.42 5.44 6.28 0zm1.62 16.37H1.35L0 19h14.11L8.2 8.73l-1.46 2.67 3.63 5.97H7.9zm10.54-5.44L12.56 0H6.28l6.28 10.93 5.86-2.57-.06.57zM14.11 16.1L12 12.54l-4.49 7.77H24L14.11 16.1z",
  dropbox:          "M12 1.5L6 5.25l6 3.75 6-3.75L12 1.5zM6 12.75L12 16.5l6-3.75-6-3.75-6 3.75zM0 5.25L6 9l6-3.75L6 1.5 0 5.25zm18 3.75l6-3.75L18 1.5l-6 3.75 6 3.75zm-6 1.5L6 14.25l6 3.75 6-3.75L12 10.5zm-12 3.75L6 18l6-3.75-6-3.75-6 3.75zm18 0L12 18l6 3.75 6-3.75-6-3.75z",
  microsoftonedrive:"M14.558 8.417A5.576 5.576 0 0 0 9.375 4.8a5.57 5.57 0 0 0-4.917 2.95A4.187 4.187 0 0 0 0 11.992 4.19 4.19 0 0 0 4.192 16.2h10.366a3.6 3.6 0 0 0 .787-7.12zm3.245.942a4.793 4.793 0 0 1 .597 9.541H3.208a5.593 5.593 0 0 0 .975.3h14.17a5.993 5.993 0 0 0 5.647-6c0-2.88-2.025-5.28-4.8-5.795a4.8 4.8 0 0 0-1.397-.046z",
  visualstudiocode: "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",
  react:            "M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.357 23.357 0 0 0-1.364-3.578l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z",
  tailwindcss:      "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z",
  bootstrap:        "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.956v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.325-1.663zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-8.037 0c0-1.588-1.09-2.501-2.988-2.501H8.577v9.906h3.207c2.07 0 3.241-.953 3.241-2.555 0-1.133-.61-2.024-1.726-2.33.962-.322 1.638-1.085 1.638-2.52z",
  nodedotjs:        "M11.998 24c-.321 0-.641-.084-.924-.247l-2.937-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.249 1.327-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V7.926c0-.099-.052-.19-.137-.24l-8.791-5.072a.271.271 0 0 0-.274 0L3.065 7.686c-.087.05-.141.144-.141.24v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V8.999c0-.143.111-.253.254-.253h1.109c.139 0 .254.11.254.253v10.813c0 1.748-.951 2.749-2.608 2.749-.508 0-.909 0-2.026-.551L2.28 20.508A1.851 1.851 0 0 1 1.332 19v-10.2c0-.66.353-1.278.924-1.609l8.795-5.076a1.927 1.927 0 0 1 1.85 0l8.794 5.077c.57.33.924.949.924 1.608v10.2a1.85 1.85 0 0 1-.924 1.609l-8.794 5.075A1.87 1.87 0 0 1 11.998 24z",
  php:              "M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm13.69-4.62c.924 0 1.67.19 2.22.57.55.38.9.98.9 1.77 0 .59-.14 1.08-.43 1.47-.28.4-.67.71-1.18.93l2.01 3.75h-1.75l-1.73-3.43H12.2v3.43H10.6V7.38h3.09zm-.2 3.62c.5 0 .88-.11 1.14-.34.26-.22.39-.57.39-1.02 0-.44-.13-.75-.4-.96-.27-.2-.65-.3-1.14-.3H12.2v2.62h1.29zm-7.69 1.02c0-.93.19-1.72.57-2.34a3.7 3.7 0 0 1 1.56-1.44c.65-.33 1.37-.49 2.16-.49h.74v1.54h-.74c-.6 0-1.12.13-1.55.39-.43.26-.76.64-.99 1.13-.22.49-.34 1.07-.34 1.71 0 .63.11 1.2.34 1.69.22.49.56.87.99 1.14.43.26.96.39 1.56.39H10.1V17h-.74c-.78 0-1.49-.16-2.14-.49-.65-.32-1.17-.81-1.56-1.44-.38-.63-.57-1.41-.57-2.33z",
  mysql:            "M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.19.214.49.062.064.072.28.072.28v5.765c-.145-.036-.27-.116-.389-.259-.022-.029-.049-.084-.072-.084-.021 0-.052.022-.052.022-.07.12-.115.198-.138.386-.023.189-.031.378.011.483.042.105.076.231.118.335.042.104.087.219.161.336.074.117.156.226.223.316.068.091.12.153.194.216.075.063.134.103.198.136.064.034.109.055.183.077.073.022.14.038.208.038.072 0 .146-.016.21-.038.066-.022.125-.049.183-.077a1.5 1.5 0 0 0 .354-.239c.088-.088.16-.19.215-.305.064-.12.11-.25.14-.385.03-.136.045-.275.045-.418V7.474c.052-.065.104-.138.146-.213.04-.076.067-.153.079-.232a.526.526 0 0 0-.009-.258.56.56 0 0 0-.153-.22.69.69 0 0 0-.27-.14 1.3 1.3 0 0 0-.402-.063z",
  postgresql:       "M17.128 0a10.134 10.134 0 0 0-2.755.403C12.602.057 10.855 0 10.8 0 8.168 0 6.5 1.067 6.5 1.067 4.203 1.215.344 2.67.02 7.018c-.077 1.029.023 2.063.298 3.062.6 2.204 2.477 4.58 5.119 4.089a4.478 4.478 0 0 0 1.531-.538l.032.19c-.167.082-.299.202-.38.362l-.005.012c-.302.652-.124 1.258.35 1.662.08.072.17.136.265.19.05.03.1.055.153.077v.013c-.078.152-.12.32-.12.492 0 .637.515 1.154 1.149 1.154a1.15 1.15 0 0 0 1.15-1.154 1.13 1.13 0 0 0-.048-.32l.003.011c.23-.003.459-.036.679-.097l-.022.005a1.15 1.15 0 0 0 1.119 1.396 1.15 1.15 0 0 0 1.149-1.154 1.14 1.14 0 0 0-.247-.708l.002.003c.37-.356.521-.874.401-1.375l-.002-.007-.152-.575a5.268 5.268 0 0 0 2.748-.965l-.028.019c-.104 1.06.112 1.93.548 2.524a2.5 2.5 0 0 0 2.024 1.045c1.943 0 3.514-2.26 3.809-5.398C23.571 5.026 20.978 0 17.128 0zM8.5 14.22a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44zm3.208 2.01a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44z",
  supabase:         "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.99 12.558 1.5 13 2 13h7.836a1 1 0 0 0 1-.999V1.036zM12.1 22.964c.015.986 1.26 1.41 1.875.637l9.26-11.65A1.58 1.58 0 0 0 22 11H14.1a1 1 0 0 0-1 .999v10.965z",
  github:           "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  gitlab:           "M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.386 9.45.044 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.625-8.443a.92.92 0 0 0 .33-1.024",
  wordpress:        "M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm1.44 0c0 5.8 4.76 10.56 10.56 10.56 5.8 0 10.56-4.76 10.56-10.56C22.56 6.2 17.8 1.44 12 1.44 6.2 1.44 1.44 6.2 1.44 12zm2.19 0C3.63 7.1 7.39 3.43 12 3.43c1.55 0 3.01.43 4.25 1.18L5.04 15.7A8.5 8.5 0 0 1 3.63 12zm8.37 8.57c-1.59 0-3.07-.46-4.31-1.24l11.27-11.04A8.505 8.505 0 0 1 20.57 12c0 4.72-3.84 8.57-8.57 8.57z",
  figma:            "M5.998 24c1.657 0 3-1.343 3-3v-3h-3a3 3 0 0 0 0 6zm3-12H5.998a3 3 0 0 0 0 6h3v-6zm0-6H5.998a3 3 0 0 0 0 6h3V6zm6 0h-3v6h3a3 3 0 0 0 0-6zm0 6h-3v6h3a3 3 0 0 0 0-6z",
  canva:            "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.748 17.01a4.94 4.94 0 0 1-4.938-4.938A4.94 4.94 0 0 1 11.252 7.134a4.94 4.94 0 0 1 4.937 4.938 4.94 4.94 0 0 1-4.937 4.938zm5.623-1.02a6.323 6.323 0 0 0 .95-3.918 6.323 6.323 0 0 0-6.573-6.054 6.323 6.323 0 0 0-5.786 6.573 6.323 6.323 0 0 0 6.573 5.786 6.323 6.323 0 0 0 4.836-2.387z",
  openai:           "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.001 14.21a4.501 4.501 0 0 1-1.66-6.314zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.816 2.788a4.499 4.499 0 0 1-.676 8.119v-5.678a.79.79 0 0 0-.388-.692zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.814-2.784a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z",
  zapier:           "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.57 14.27h-3.67l2.34 3.9H9.77l2.34-3.9H8.44l-1.5-2.27h3.67L8.27 8.1h6.46l-2.34 3.9h3.67l1.5 2.27z",
  grammarly:        "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.195 4.797c3.035 0 5.494 1.46 6.977 3.773l-2.002 1.39a5.684 5.684 0 0 0-4.975-2.835c-3.168 0-5.746 2.57-5.746 5.737 0 3.168 2.578 5.738 5.746 5.738 2.66 0 4.9-1.809 5.567-4.253H12.5V11.78h7.406c.08.444.13.9.13 1.363C20.036 17.465 16.511 21 12.195 21 7.665 21 4 17.334 4 12.804S7.665 4.797 12.195 4.797z",
  bitwarden:        "M12 1L3 5v8c0 4.97 3.84 9.64 9 10.93C17.16 22.64 21 17.97 21 13V5l-9-4zm0 4.5l6 2.67V13c0 3.47-2.69 6.72-6 7.93-3.31-1.21-6-4.46-6-7.93V8.17L12 5.5z",
  calendly:         "M19.59 3.6C17.48 1.35 14.38 0 11 0 4.925 0 0 4.925 0 11s4.925 11 11 11c3.38 0 6.48-1.35 8.59-3.6L17.5 16.3c-1.6 1.75-3.9 2.7-6.5 2.7-4.97 0-9-4.03-9-9s4.03-9 9-9c2.6 0 4.9.95 6.5 2.7L19.59 3.6zM13 6v5.586l3.707 3.707-1.414 1.414L11 13V6h2z",
  googlecalendar:   "M18 0H6L0 6v12l6 6h12l6-6V6l-6-6zm-1 17H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z",
  mondaydotcom:     "M4.032 14.976c-.936 0-1.696-.76-1.696-1.696S3.096 11.584 4.032 11.584c.463 0 .882.188 1.186.492l4.166-7.22A3.752 3.752 0 0 1 8 2.752C8 .752 9.752 0 12 0s4 .752 4 2.752a3.752 3.752 0 0 1-.384 2.104l4.166 7.22c.304-.304.723-.492 1.186-.492.936 0 1.696.76 1.696 1.696s-.76 1.696-1.696 1.696c-.463 0-.882-.188-1.186-.492l-4.166 7.22c.24.42.384.904.384 1.424C16 23.248 14.248 24 12 24s-4-.752-4-2.752c0-.52.144-1.004.384-1.424l-4.166-7.22c-.304.304-.723.492-1.186.492z",
  adobephotoshop:   "M0 0v24h24V0H0zm10.014 6.508c1.16 0 1.975.187 2.664.564a3.67 3.67 0 0 1 1.64 1.64c.376.69.563 1.503.563 2.438 0 .937-.187 1.749-.563 2.438-.375.69-.922 1.22-1.64 1.64-.69.376-1.503.564-2.664.564H7.639V17.5H6.01V6.508h4.004zm0 7.848c.939 0 1.668-.236 2.14-.706.47-.47.705-1.126.705-1.97 0-.844-.235-1.5-.705-1.97-.472-.47-1.201-.707-2.14-.707H7.639v5.353h2.375zm6.794-1.347c.057.58.354 1.024.891 1.332.537.31 1.136.463 1.797.463.426 0 .8-.055 1.122-.165a1.96 1.96 0 0 0 .77-.47c.199-.205.298-.452.298-.745 0-.359-.135-.641-.405-.846-.27-.205-.657-.384-1.162-.538l-1.352-.385c-.674-.19-1.18-.455-1.518-.795-.338-.34-.507-.775-.507-1.306 0-.531.15-.99.449-1.377.3-.386.71-.683 1.231-.892.521-.209 1.112-.313 1.773-.313.71 0 1.322.13 1.835.389.514.26.91.617 1.188 1.073.28.455.427.97.442 1.544h-1.56c-.057-.523-.268-.933-.632-1.229-.364-.295-.835-.443-1.412-.443-.514 0-.93.108-1.248.323a.975.975 0 0 0-.477.847c0 .297.107.534.321.71.215.177.552.336 1.012.476l1.393.397c.73.212 1.278.494 1.645.845.367.351.55.808.55 1.37 0 .583-.157 1.08-.47 1.49-.313.41-.751.723-1.315.938-.563.216-1.212.323-1.945.323-.773 0-1.455-.13-2.043-.39a3.258 3.258 0 0 1-1.372-1.093 2.97 2.97 0 0 1-.503-1.622h1.581z",
  adobepremierepro: "M0 0v24h24V0H0zm9.7 6.506c1.015 0 1.726.186 2.2.56.474.373.71.908.71 1.605 0 .52-.125.956-.376 1.31a2.33 2.33 0 0 1-1.05.822l1.782 4.69H11.16l-1.54-4.22H8.506v4.22H7.2V6.506H9.7zm6.785 1.88c.43 0 .82.086 1.17.26.35.17.655.422.914.75v-.89h1.2v8.988h-1.2v-.888a2.568 2.568 0 0 1-.914.748c-.35.174-.74.26-1.17.26-.545 0-1.028-.134-1.45-.4a2.73 2.73 0 0 1-.978-1.108c-.233-.474-.35-1.012-.35-1.615v-.58c0-.603.117-1.14.35-1.615a2.73 2.73 0 0 1 .978-1.108c.422-.266.905-.4 1.45-.4zM9.456 8.032H8.506v3.02h.95c.7 0 1.195-.15 1.488-.452.294-.3.44-.7.44-1.2 0-.472-.143-.834-.43-1.084-.285-.25-.73-.376-1.5-.376zm7.037.75c-.548 0-.986.2-1.316.6-.33.4-.494.928-.494 1.585v.58c0 .655.165 1.182.494 1.582.33.4.768.6 1.316.6.322 0 .61-.075.866-.225a1.7 1.7 0 0 0 .622-.638v-3.82a1.7 1.7 0 0 0-.622-.64 1.736 1.736 0 0 0-.866-.224z",
  loom:             "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
};

// ── Categories & Tools ────────────────────────────────────────────────────────
interface Tool { name: string; icon: string }
interface Category { id: string; label: string; emoji: string; tools: Tool[] }

const categories: Category[] = [
  {
    id: "communication", label: "Communication", emoji: "💬",
    tools: [
      { name: "Gmail",           icon: "gmail" },
      { name: "Outlook",         icon: "microsoftoutlook" },
      { name: "Slack",           icon: "slack" },
      { name: "Microsoft Teams", icon: "microsoftteams" },
      { name: "Zoom",            icon: "zoom" },
      { name: "Google Meet",     icon: "googlemeet" },
      { name: "Skype",           icon: "skype" },
      { name: "Discord",         icon: "discord" },
      { name: "WhatsApp",        icon: "whatsapp" },
    ],
  },
  {
    id: "scheduling", label: "Scheduling", emoji: "📅",
    tools: [
      { name: "Calendly",        icon: "calendly" },
      { name: "Google Calendar", icon: "googlecalendar" },
    ],
  },
  {
    id: "projectmgmt", label: "Project Management", emoji: "📋",
    tools: [
      { name: "Trello",     icon: "trello" },
      { name: "Asana",      icon: "asana" },
      { name: "Monday.com", icon: "mondaydotcom" },
    ],
  },
  {
    id: "cloud", label: "Cloud Storage", emoji: "☁️",
    tools: [
      { name: "Google Drive", icon: "googledrive" },
      { name: "Dropbox",      icon: "dropbox" },
      { name: "OneDrive",     icon: "microsoftonedrive" },
    ],
  },
  {
    id: "webdev", label: "Web Development", emoji: "💻",
    tools: [
      { name: "VS Code",      icon: "visualstudiocode" },
      { name: "React",        icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap",    icon: "bootstrap" },
      { name: "Node.js",      icon: "nodedotjs" },
      { name: "PHP",          icon: "php" },
      { name: "MySQL",        icon: "mysql" },
      { name: "PostgreSQL",   icon: "postgresql" },
      { name: "Supabase",     icon: "supabase" },
      { name: "GitHub",       icon: "github" },
      { name: "GitLab",       icon: "gitlab" },
      { name: "WordPress",    icon: "wordpress" },
    ],
  },
  {
    id: "design", label: "Graphic Design & Creative", emoji: "🎨",
    tools: [
      { name: "Photoshop",     icon: "adobephotoshop" },
      { name: "Figma",         icon: "figma" },
      { name: "Canva",         icon: "canva" },
      { name: "Premiere Pro",  icon: "adobepremierepro" },
    ],
  },
  {
    id: "ai", label: "Automation & AI", emoji: "🤖",
    tools: [
      { name: "ChatGPT",   icon: "openai" },
      { name: "Zapier",    icon: "zapier" },
      { name: "Grammarly", icon: "grammarly" },
      { name: "Loom",      icon: "loom" },
    ],
  },
  {
    id: "security", label: "Security", emoji: "🔐",
    tools: [
      { name: "Bitwarden", icon: "bitwarden" },
    ],
  },
];

const totalTools = categories.reduce((acc, c) => acc + c.tools.length, 0);

function ToolIcon({ icon }: { icon: string }) {
  const path = SI[icon];
  if (path) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}>
        <path d={path} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14, height: 14 }}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

export default function Tools() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const visibleCategories = activeFilter === "all"
    ? categories
    : categories.filter(c => c.id === activeFilter);

  return (
    <>
      <style>{`
        .tools-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .tools-wrapper::before {
          content: '';
          position: absolute;
          top: -10%; right: -5%;
          width: 650px; height: 650px;
          background: radial-gradient(circle, rgba(255,200,80,0.05) 0%, transparent 68%);
          pointer-events: none;
        }
        .tools-wrapper::after {
          content: '';
          position: absolute;
          bottom: -10%; left: -5%;
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }
        .tools-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 7rem 3rem;
          display: flex;
          gap: clamp(3rem, 8vw, 7rem);
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }
        .tools-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }
        .tools-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }
        .tools-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }
        .tools-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }
        .tools-section-heading span { color: #ffc850; }
        .tools-count-badge {
          margin-top: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .tools-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #ffc850;
          line-height: 1;
          letter-spacing: 0.04em;
        }
        .tools-count-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }
        .tools-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .tools-intro-line {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .tools-intro-pill {
          padding: 0.3rem 0.9rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffc850;
        }
        .tools-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.02rem);
          color: rgba(255,255,255,0.5);
          line-height: 1.9;
          font-weight: 300;
        }
        .tools-bio em { color: #ffc850; font-style: normal; }
        .tools-bio strong { color: #fff; font-weight: 500; }
        .tools-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }
        .tools-filters {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .tools-filter-btn {
          padding: 0.4rem 1rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .tools-filter-btn:hover {
          border-color: rgba(255,200,80,0.3);
          color: rgba(255,200,80,0.75);
        }
        .tools-filter-btn.active {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.4);
          color: #ffc850;
        }
        .tools-categories {
          display: flex;
          flex-direction: column;
          gap: 1.5px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
        }
        .tools-category-block {
          background: rgba(8,8,12,0.96);
          transition: background 0.2s;
        }
        .tools-category-block:hover { background: rgba(12,12,18,0.99); }
        .tools-cat-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.4rem 0.85rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .tools-cat-emoji { font-size: 0.95rem; line-height: 1; opacity: 0.8; }
        .tools-cat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          transition: color 0.2s;
        }
        .tools-category-block:hover .tools-cat-label { color: rgba(255,200,80,0.7); }
        .tools-cat-count {
          margin-left: auto;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.3);
          transition: color 0.2s;
        }
        .tools-category-block:hover .tools-cat-count { color: rgba(255,200,80,0.6); }
        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 1rem 1.4rem 1.25rem;
        }
        .tools-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.38rem 0.8rem 0.38rem 0.65rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 3px;
          cursor: default;
          transition: background 0.2s, border-color 0.2s, transform 0.18s;
        }
        .tools-chip:hover {
          background: rgba(255,200,80,0.06);
          border-color: rgba(255,200,80,0.25);
          transform: translateY(-1px);
        }
        .tools-chip-icon {
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
        }
        .tools-chip:hover .tools-chip-icon { color: #ffc850; }
        .tools-chip-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.76rem;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
          white-space: nowrap;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .tools-chip:hover .tools-chip-name { color: rgba(255,255,255,0.85); }

        @media (max-width: 900px) {
          .tools-inner { padding: 5rem 2.5rem; gap: 3rem; }
          .tools-left { position: static; }
        }
        @media (max-width: 680px) {
          .tools-inner { padding: 4.5rem 1.5rem 5rem; flex-direction: column; gap: 0; }
          .tools-left { margin-bottom: 2rem; }
          .tools-section-heading { font-size: clamp(3.2rem, 16vw, 4.5rem); }
          .tools-count-badge { display: none; }
          .tools-cat-header { padding: 0.85rem 1rem 0.75rem; }
          .tools-grid { padding: 0.85rem 1rem 1rem; gap: 6px; }
          .tools-chip { padding: 0.3rem 0.65rem 0.3rem 0.5rem; }
          .tools-chip-name { font-size: 0.72rem; }
        }
        @media (max-width: 400px) {
          .tools-inner { padding: 4rem 1.25rem 4.5rem; }
          .tools-section-heading { font-size: 3rem; }
          .tools-chip-name { font-size: 0.68rem; }
        }
      `}</style>

      <section className="tools-wrapper" id="tools">
        <div className="tools-inner">

          <div className="tools-left">
            <span className="tools-section-tag">My Stack</span>
            <h2 className="tools-section-heading">Tools &amp;<br /><span>Skills</span></h2>
            <div className="tools-count-badge">
              <span className="tools-count-num">{totalTools}+</span>
              <span className="tools-count-label">Tools Known</span>
            </div>
          </div>

          <div className="tools-right">
            <div className="tools-intro-line">
              <span className="tools-intro-pill">💬 Communication</span>
              <span className="tools-intro-pill">💻 Web Dev</span>
              <span className="tools-intro-pill">🎨 Design</span>
              <span className="tools-intro-pill">🤖 AI &amp; Automation</span>
              <span className="tools-intro-pill">🔐 Security</span>
            </div>

            <p className="tools-bio">
              A versatile toolkit spanning <em>communication</em>, <em>web development</em>,{" "}
              <em>design</em>, and <em>automation</em>. These are the platforms and technologies
              I rely on daily to <strong>deliver quality work</strong> across every project.
            </p>

            <div className="tools-divider" />

            <div className="tools-filters">
              <button className={`tools-filter-btn${activeFilter === "all" ? " active" : ""}`} onClick={() => setActiveFilter("all")}>
                All ({totalTools})
              </button>
              {categories.map(c => (
                <button
                  key={c.id}
                  className={`tools-filter-btn${activeFilter === c.id ? " active" : ""}`}
                  onClick={() => setActiveFilter(c.id)}
                >
                  {c.emoji} {c.label}
                </button>
              ))}
            </div>

            <div className="tools-categories">
              {visibleCategories.map(cat => (
                <div key={cat.id} className="tools-category-block">
                  <div className="tools-cat-header">
                    <span className="tools-cat-emoji">{cat.emoji}</span>
                    <span className="tools-cat-label">{cat.label}</span>
                    <span className="tools-cat-count">{cat.tools.length}</span>
                  </div>
                  <div className="tools-grid">
                    {cat.tools.map(tool => (
                      <div key={tool.name} className="tools-chip">
                        <span className="tools-chip-icon"><ToolIcon icon={tool.icon} /></span>
                        <span className="tools-chip-name">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}