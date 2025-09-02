import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarProps  {
  userName: string;
  type?: "admin" |"student";
}
export type { SidebarProps };
export default function Sidebar({ userName, type }: SidebarProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู */}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
      </Box>

      {/* แสดงผู้ใช้งาน */}
      <Box p="md">
        <Group gap="sm">
          <Indicator color="red" offset={4} size={12} withBorder position="bottom-end">
            <Avatar
              src="\Avatar101.png"
              alt={userName}
              radius="xl"
            />
          </Indicator>
          <Text size="m">
            User : {userName} :{" "} {type}
          </Text>
        </Group>
      </Box>
    </Stack>
  );

}
